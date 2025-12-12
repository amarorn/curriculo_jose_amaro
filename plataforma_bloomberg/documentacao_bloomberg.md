
# 📘 Plataforma Bloomberg — Documentação Técnica Completa

> **Documento oficial do Data Product Bloomberg**
> Arquitetura • Fluxos • Cálculos • Regras de Negócio • Governança • Operação

---

## 1. Visão Geral do Produto

A **Plataforma Bloomberg** é um **Data Product financeiro corporativo**, projetado para a ingestão, padronização, cálculo e disponibilização de séries financeiras diárias com um alto grau de confiabilidade, auditabilidade e rastreabilidade. O principal objetivo da plataforma é fornecer uma fonte centralizada e confiável de dados financeiros para suportar decisões de negócio críticas em toda a organização.

O produto final entregue aos consumidores de dados é o **data mart `dm_bloomberg`**. Este data mart consolida uma vasta gama de informações, incluindo preços de ativos, séries temporais contínuas e uma variedade de indicadores financeiros derivados. Os dados são pré-processados e estruturados para estarem prontos para consumo imediato por ferramentas de Business Intelligence (BI), APIs de sistemas internos e modelos de análises avançadas.

### Objetivos do Produto

Os objetivos estratégicos que norteiam o desenvolvimento e a operação da Plataforma Bloomberg são:

- **Centralizar Fontes de Dados:** Unificar dados financeiros provenientes de múltiplas fontes, como a própria Bloomberg, Fastmarkets e arquivos manuais, eliminando silos de informação e garantindo uma visão única da verdade.
- **Garantir Consistência Temporal:** Manter um calendário financeiro completo e contínuo, preenchendo lacunas em dias não úteis ou feriados através de regras de negócio bem definidas, como o *carry-forward*.
- **Aplicar Regras Auditáveis:** Implementar toda a lógica de cálculo e transformação de forma explícita e transparente, permitindo que cada número gerado possa ser auditado e sua origem rastreada até a fonte bruta.
- **Entregar Indicadores Confiáveis:** Produzir um catálogo de indicadores financeiros robustos e consistentes, como médias móveis, variações percentuais (MTD, YTD) e lags temporais, que sirvam como base para a tomada de decisão estratégica.
- **Permitir Reprocessamento Controlado:** Oferecer a capacidade de reprocessar dados históricos de forma segura e controlada, seja para corrigir regras de negócio, adicionar novos indicadores ou ajustar metadados, sem comprometer a integridade dos dados.

---

## 2. Stack Tecnológico

A arquitetura da plataforma foi construída sobre os serviços da **Microsoft Azure**, utilizando uma combinação de tecnologias serverless, de big data e de orquestração para garantir escalabilidade, segurança e governança. A tabela abaixo detalha a stack tecnológica utilizada em cada camada da solução.

| Camada | Tecnologia | Papel Estratégico |
| :--- | :--- | :--- |
| **Orquestração** | Azure Data Factory | Responsável pelo controle centralizado do fluxo de dados, gerenciando a ordem de execução, dependências, políticas de *retry* e o registro de logs operacionais. Atua como o cérebro do processo. |
| **Ingestão** | Azure Functions | Utilizadas para a coleta de dados de fontes externas de forma *serverless*. Elas lidam com a autenticação, chamadas a APIs, paginação de resultados e aterrissagem dos dados brutos no Data Lake. |
| **Armazenamento** | Azure Data Lake Storage Gen2 | Serve como o repositório central para todos os dados, estruturado em camadas (RAW, Trusted, Refined). Garante a persistência da evidência histórica imutável e armazena os dados processados. |
| **Processamento** | Azure Databricks (PySpark + Delta) | O coração da plataforma, onde todas as transformações, cálculos e regras de negócio são aplicadas. O uso de PySpark permite o processamento distribuído de grandes volumes de dados, e o Delta Lake garante a atomicidade e a governança das tabelas. |
| **Segurança** | Azure Key Vault + Managed Identity | Garante a gestão segura de segredos, chaves de API e strings de conexão. A autenticação entre os serviços é realizada via *Managed Identity*, eliminando a necessidade de credenciais expostas no código. |
| **Consumo** | Power BI / APIs / Databricks SQL | A camada final que expõe os dados governados aos usuários. O Power BI é utilizado para dashboards e relatórios, APIs para integração com sistemas e o Databricks SQL para consultas analíticas ad-hoc. |

---

## 3. Arquitetura Geral (Visão Lógica)

A arquitetura da Plataforma Bloomberg segue o modelo **Lakehouse governado**, que combina a flexibilidade e o baixo custo de um Data Lake com as garantias de ACID e a governança de um Data Warehouse. A estrutura é dividida em planos lógicos distintos, cada um com responsabilidades bem definidas, garantindo a separação de preocupações e a manutenibilidade da solução.

![Arquitetura Lógica](https://raw.githubusercontent.com/amarorn/curriculo_jose_amaro/main/plataforma_bloomberg/arquitetura_logica.png)

### Princípios Arquiteturais

A robustez da arquitetura é sustentada por um conjunto de princípios fundamentais que guiam o desenvolvimento e a operação da plataforma:

- **O ADF orquestra, não transforma:** O Azure Data Factory é estritamente um orquestrador. Sua função é invocar outros serviços (como Functions e Databricks) e gerenciar o fluxo, mas nunca aplicar lógica de negócio ou transformar os dados diretamente.
- **Azure Functions coletam, não interpretam:** As Functions são responsáveis por buscar os dados nas fontes e depositá-los na camada RAW da forma mais bruta possível. Elas não devem realizar nenhuma limpeza, transformação ou interpretação do conteúdo.
- **O Data Lake é evidência, não lógica:** A camada RAW do Data Lake é um registro imutável da realidade, servindo como evidência histórica. Os dados nesta camada nunca são alterados, garantindo a capacidade de reprocessamento e auditoria a qualquer momento.
- **Databricks é o único local onde regras de negócio existem:** Toda a lógica de cálculo, transformação e enriquecimento de dados reside exclusivamente no ambiente Databricks. Isso centraliza as regras de negócio, facilita a manutenção e garante que a interpretação dos dados seja consistente e auditável.


---

## 4. Fluxo End-to-End Detalhado

O fluxo de dados da Plataforma Bloomberg é um processo orquestrado que abrange desde a captura dos dados brutos até a sua disponibilização para consumo. Cada etapa do fluxo possui responsabilidades claras, garantindo a integridade e a rastreabilidade do dado ao longo de sua jornada.

### 4.1 Disparo (Trigger)

A execução do pipeline é iniciada por um gatilho, que pode ser configurado de diversas formas para atender às necessidades do negócio. É crucial notar que, nesta fase, nenhum dado financeiro é processado; apenas os parâmetros de execução (como datas de referência) são passados para o orquestrador. Os tipos de gatilho suportados são:

- **Agendamento:** Execuções automáticas em horários predefinidos (ex: diariamente às 08:00) ou em intervalos (intraday).
- **Execução Manual:** Disparos sob demanda, realizados de forma controlada por operadores para reprocessamentos ou execuções emergenciais.
- **Evento Externo:** O fluxo pode ser iniciado em resposta a um evento em outro sistema, como a chegada de um novo arquivo em uma pasta do SharePoint.
- **Chamada via API:** Sistemas externos podem iniciar o pipeline de forma programática através de uma chamada de API segura.

### 4.2 Orquestração — Azure Data Factory

O Azure Data Factory (ADF) atua como o plano de controle de todo o processo. Sua principal responsabilidade é gerenciar o ciclo de vida da execução dos dados, garantindo que as etapas sejam executadas na ordem correta e com a devida resiliência. As principais funções do ADF no fluxo são:

- **Definir a Ordem de Execução:** Garante que os jobs de ingestão, processamento e carga sejam executados na sequência correta.
- **Gerenciar Dependências:** Controla as dependências entre os diferentes pipelines e atividades.
- **Aplicar Políticas de Resiliência:** Implementa lógicas de *retry* (tentativas de reexecução em caso de falha) e *timeout* (tempo máximo de execução) para garantir a robustez do processo.
- **Registrar Logs de Execução:** Centraliza os logs operacionais, fornecendo uma visão completa do que foi executado, quando e com qual resultado.

> **Regra de Ouro:** Em linha com os princípios arquiteturais, o ADF **não transforma dados**. Ele apenas invoca os serviços que realizam o trabalho pesado, como as Azure Functions e os jobs do Databricks.

### 4.3 Ingestão — Azure Functions

A camada de aquisição de dados é implementada através de Azure Functions, que fornecem um ambiente de execução *serverless*, elástico e de baixo custo para a coleta de dados de fontes externas. As responsabilidades das Functions incluem:

- **Autenticação Segura:** Utilizam o Azure Key Vault para obter credenciais de forma segura e se autenticar nas APIs de origem.
- **Chamada às APIs Externas:** Realizam as chamadas HTTP para as fontes de dados, como as APIs da Bloomberg (getData, getHistory) e da Fastmarkets.
- **Paginação e Controle de Volume:** Gerenciam a paginação dos resultados para lidar com grandes volumes de dados, garantindo que todos os registros sejam coletados.
- **Persistência em Formato Bruto:** Após a coleta, os dados são persistidos na camada RAW do Data Lake em seu formato original (JSON), geralmente compactados (.gz) para otimizar o armazenamento.

As principais fontes de dados ingeridas por este processo são:

- **Bloomberg:** APIs `getData` e `getHistory` para séries temporais e dados de mercado.
- **Fastmarkets:** API para cotações de commodities específicas.
- **SharePoint:** Arquivos manuais (Excel, CSV) contendo dados que não estão disponíveis via API.


---

## 5. Armazenamento — Data Lake

O Azure Data Lake Storage Gen2 é o pilar do armazenamento de dados da plataforma, organizado em um modelo de camadas (medallion architecture) que promove a governança, a qualidade e a rastreabilidade dos dados. Cada camada tem um propósito específico, transformando os dados de seu estado bruto para um formato refinado e pronto para análise.

### 5.1 Camada RAW (Landing/Bronze)

A camada RAW é o ponto de entrada para todos os dados na plataforma. Ela funciona como uma **evidência histórica imutável** do que foi recebido das fontes originais. Os dados aqui são armazenados em seu formato nativo, sem qualquer tipo de transformação ou limpeza.

- **Características:**
    - **Dados Brutos:** Cópia exata do que foi entregue pela fonte.
    - **Imutabilidade:** Uma vez escritos, os dados na camada RAW nunca são alterados ou excluídos. Isso é fundamental para a auditoria e o reprocessamento.
    - **Estrutura de Pastas:** Os dados são organizados por fonte, data e hora de ingestão, facilitando a localização e o rastreamento. Exemplo: `/raw/suprimentos/bloomberg/YYYY/MM/DD/*.json.gz`.

### 5.2 Camada Trusted (Silver)

Na camada Trusted, os dados brutos passam por um primeiro nível de processamento. O objetivo desta camada é transformar os dados de diferentes fontes em um formato padronizado e consistente, resolvendo problemas de qualidade e integrando informações.

- **Responsabilidades:**
    - **Normalização de Schema:** Aplica um schema consistente aos dados, convertendo tipos de dados e renomeando campos para seguir um padrão definido.
    - **Deduplicação:** Remove registros duplicados que possam ter sido ingeridos.
    - **Integração por Fonte:** Consolida os dados de uma mesma fonte em tabelas Delta unificadas.

As tabelas principais nesta camada incluem `metadata_bloomberg`, `get_history`, `dm_date`, `dm_cambio` e `manual`.

### 5.3 Camada Refined (Gold)

A camada Refined é a camada final do Data Lake, onde os dados são transformados em ativos de alto valor, prontos para o consumo. É aqui que as regras de negócio complexas, os cálculos financeiros e as agregações são aplicados para criar os Data Products finais.

- **Características:**
    - **Regras de Negócio:** Aplicação de toda a lógica de negócio, como a regra de *carry-forward* e os cálculos de indicadores.
    - **Cálculos Financeiros:** Geração de médias móveis, variações MTD/YTD e outros indicadores financeiros.
    - **Data Marts Finais:** Criação dos data marts agregados e otimizados para consulta, como o `dm_bloomberg` e o `dm_dicionario`.

Os produtos desta camada são a **fonte única da verdade** para todas as análises e relatórios da empresa.


---

## 6. Data Product — dm_dicionario

O `dm_dicionario` é um dos produtos de dados mais críticos da plataforma, atuando como o **contrato semântico** de todo o ecossistema. Sua principal função é governar os metadados dos ativos financeiros, garantindo que os tickers e identificadores sejam resolvidos de forma consistente e que as regras de prioridade entre fontes sejam aplicadas corretamente.

### Funções Estratégicas

- **Resolver De/Para de Tickers:** Centraliza o mapeamento entre diferentes identificadores para um mesmo ativo (ex: ticker da Bloomberg, código interno, ISIN), criando uma visão unificada.
- **Definir Prioridade de Fontes:** Quando um mesmo dado está disponível em mais de uma fonte, o `dm_dicionario` define qual delas é a fonte primária, evitando ambiguidades.
- **Validar Histórico e Nome:** Contém regras de validação, como `CHECK_NAME` e `CHECK_HIST`, que garantem a consistência dos nomes dos ativos e a integridade de suas séries históricas.

Em essência, o `dm_dicionario` garante que todos os componentes da plataforma falem a mesma língua, tratando os ativos financeiros de maneira uniforme e previsível.

---

## 7. Data Product — dm_bloomberg

O `dm_bloomberg` é o **principal Data Product** da plataforma, representando o resultado final de todo o processo de ingestão, processamento e enriquecimento. É uma tabela consolidada e altamente governada que serve como a fonte única da verdade para a maioria das análises financeiras da empresa.

### 7.1 Chaves de Identificação

A granularidade da tabela é definida por uma chave primária composta que garante a unicidade de cada registro. A combinação de um identificador de ativo e uma data específica permite a construção de séries temporais precisas.

- **`IDENTIFIER`:** O identificador principal do ativo, resolvido através do `dm_dicionario`.
- **`ID_BB_GLOBAL`:** O identificador global da Bloomberg, para rastreabilidade com a fonte.
- **`DATE`:** A data de referência do dado financeiro, no formato `YYYY-MM-DD`.

### 7.2 Regras Fundamentais

A confiabilidade do `dm_bloomberg` é assegurada por um conjunto de regras de negócio fundamentais que são aplicadas durante sua construção:

- **Calendário Completo via `dm_date`:** A tabela possui um registro para cada ativo e para cada dia do calendário, sem lacunas. Isso é alcançado através de um *join* com a tabela de dimensão de datas (`dm_date`).
- **Série Contínua por Ativo:** Para dias não úteis ou feriados, onde não há um novo preço, a regra de *carry-forward* é aplicada para garantir a continuidade da série temporal.
- **Carry-forward Apenas para Preços Absolutos:** A propagação do último valor válido é aplicada **exclusivamente** a campos de preço absoluto (como `PX_LAST`). Campos de variação (`%Change`) nunca são propagados, pois representam um evento discreto.
- **`%Change` Nunca Vira Preço:** A plataforma nunca tenta inferir um preço absoluto a partir de um campo de variação percentual. A variação é tratada como uma informação distinta do preço.


---

## 8. Lógica de Cálculo (Detalhada)

Todos os cálculos e regras de negócio são executados **exclusivamente na camada Refined** do Databricks. Esta abordagem garante um isolamento crucial entre o dado bruto (evidência) e o dado interpretado (produto final), permitindo auditoria e governança completas. A seguir, detalhamos as principais lógicas de cálculo implementadas.

### 8.1 Carry-Forward (Regra de Continuidade Temporal)

Para garantir que a série temporal de um ativo seja contínua, sem lacunas em dias não úteis (finais de semana, feriados), a plataforma aplica a técnica de *carry-forward*. Esta regra propaga o último preço válido conhecido para os dias subsequentes que não possuem um preço reportado.

![Diagrama de Sequência do Carry-Forward](https://raw.githubusercontent.com/amarorn/curriculo_jose_amaro/main/plataforma_bloomberg/carry_forward.png)

A definição matemática da regra é:

```
PX_LAST_ALTERADO(d) = max(PX_LAST(t)) tal que t ≤ d
```

**Restrições Importantes:**

- A regra é aplicada **somente** a campos de preço absoluto (ex: `PX_LAST`).
- Campos que representam variação, como `%Change`, **nunca** são propagados, pois indicam um evento que ocorreu em uma data específica e não um estado contínuo.

### 8.2 Médias Móveis

As médias móveis são calculadas sobre o campo `PX_LAST_ALTERADO` (o preço já com a regra de carry-forward aplicada) para diferentes janelas de tempo. Estes indicadores são fundamentais para análises de tendência.

![Fluxo de Cálculo de Médias Móveis](https://raw.githubusercontent.com/amarorn/curriculo_jose_amaro/main/plataforma_bloomberg/medias_moveis.png)

As janelas de cálculo padrão são:

- `AVG_PX_LAST_30D` (Média dos últimos 30 dias)
- `AVG_PX_LAST_60D` (Média dos últimos 60 dias)
- `AVG_PX_LAST_90D` (Média dos últimos 90 dias)
- `AVG_PX_LAST_365D` (Média dos últimos 365 dias)

### 8.3 Indicadores MTD / YTD

Os indicadores *Month-To-Date* (MTD) e *Year-To-Date* (YTD) medem a variação de um ativo desde o início do mês ou do ano corrente, respectivamente. O cálculo requer a identificação de um preço base, que é o preço de fechamento do primeiro dia útil do período.

![Cálculo de Indicadores MTD/YTD](https://raw.githubusercontent.com/amarorn/curriculo_jose_amaro/main/plataforma_bloomberg/mtd_ytd.png)

As fórmulas aplicadas são:

```
CHG_NET = PX_LAST_ALTERADO - BASE
CHG_PCT = CHG_NET / BASE
```

Onde `BASE` é o `PX_LAST_ALTERADO` do primeiro dia útil do mês (para MTD) ou do ano (para YTD). Proteções contra divisão por zero são aplicadas no cálculo de `CHG_PCT`.

### 8.4 Lags e Variações

A plataforma também calcula a variação de preço entre a data corrente e pontos passados no tempo (lags). São geradas tanto a variação líquida (`CHG_NET_Dn`) quanto a percentual (`CHG_PCT_Dn`) para diferentes janelas `n` (1, 7, 30, 60, 90 e 365 dias). Todos os cálculos de variação percentual possuem guardas para evitar erros de divisão por zero.


---

## 9. Governança e Auditoria

A governança de dados é um pilar fundamental da Plataforma Bloomberg, garantindo que os dados sejam não apenas precisos, mas também rastreáveis, consistentes e seguros. Diversos mecanismos foram implementados para assegurar a auditoria completa do ciclo de vida do dado.

### 9.1 Rastreabilidade (Data Lineage)

Para garantir a rastreabilidade de ponta a ponta, cada registro no `dm_bloomberg` carrega metadados que permitem traçar sua origem até o arquivo bruto na camada RAW. Os principais campos de linhagem são:

- **`DL_SNAPSHOT_START_TIME`**: Timestamp que indica o momento exato em que o dado foi processado pelo Databricks.
- **`ingestion_date`**: Data em que o dado foi ingerido pela Azure Function, permitindo correlacionar com o arquivo JSON original.
- **`SOURCE_BBG`**: Campo que identifica a fonte original do dado (ex: 'Bloomberg API', 'Fastmarkets', 'Manual').

### 9.2 Persistência e Idempotência

A persistência dos dados nas camadas Trusted e Refined é realizada utilizando o formato **Delta Lake**. O uso do Delta Lake é crucial, pois oferece garantias de transações ACID (Atomicidade, Consistência, Isolamento e Durabilidade) sobre o Data Lake. As atualizações são realizadas através da operação `MERGE`, que é **idempotente**. Isso significa que uma mesma execução pode ser rodada várias vezes sem gerar duplicatas ou inconsistências, pois a operação de `MERGE` insere novos registros e atualiza os existentes com base em uma chave de negócio (a chave composta do `dm_bloomberg`).

### 9.3 Pontos de Atenção Documentados

Parte da governança é a transparência sobre as regras de negócio e seus pontos de atenção. Todas as lógicas complexas e débitos técnicos conhecidos são documentados e versionados junto ao código. Exemplos incluem:

- A fórmula exata utilizada no `CHG_PCT_MTD`, que estava em revisão.
- As guardas de proteção contra divisão por zero aplicadas em todos os cálculos de `CHG_PCT_Dn`.
- A criação de uma coluna `month` explícita para facilitar o particionamento e a performance de consultas.


---

## 10. Operação, SLA e Reprocessamento

A operação da plataforma é projetada para ser robusta, automatizada e com processos claros para manutenção e recuperação. Esta seção detalha o fluxo operacional padrão, os acordos de nível de serviço (SLAs) e o procedimento para reprocessamento histórico.

### 10.1 Execução dos Pipelines

Os pipelines são executados majoritariamente de forma **diária**, seguindo um cronograma que respeita a disponibilidade dos dados nas fontes e as necessidades de negócio. O fluxo operacional padrão segue as seguintes etapas:

1.  **Trigger no Azure Data Factory:** A execução é iniciada por um gatilho, seja ele agendado ou manual.
2.  **Execução das Azure Functions:** O ADF invoca as Functions responsáveis pela ingestão, que coletam os dados das fontes externas.
3.  **Escrita na Camada RAW:** As Functions persistem os dados brutos no Data Lake.
4.  **Disparo dos Jobs Databricks:** Após a conclusão da ingestão, o ADF dispara os jobs no Databricks para processar os dados.
5.  **Atualização das Camadas Trusted e Refined:** Os jobs do Databricks leem da camada RAW e atualizam as tabelas Delta nas camadas Trusted e Refined, aplicando toda a lógica de negócio.
6.  **Disponibilização para Consumo:** Uma vez que a camada Refined é atualizada, os dados estão prontos para serem consumidos pelas ferramentas de BI e APIs.

### 10.2 SLA do Produto de Dados

O Data Product `dm_bloomberg` possui um Acordo de Nível de Serviço (SLA) claro, que define os tempos esperados para a disponibilização dos dados. O monitoramento deste SLA é realizado através da view `controle_atualizacoes`, que é a fonte oficial de verdade sobre o status da atualização.

| Etapa | SLA Esperado (D+0) |
| :--- | :--- |
| Ingestão Bloomberg | Até 09:00 |
| Processamento Trusted | Até 10:00 |
| Processamento Refined | Até 11:00 |
| Disponibilidade BI | Até 12:00 |

### 10.3 Reprocessamento Histórico

A arquitetura da plataforma foi projetada para permitir o reprocessamento de dados históricos de forma segura e rastreável. Este procedimento é necessário em cenários como:

-   Correção de uma regra de negócio que foi implementada incorretamente.
-   Inclusão de novos indicadores que precisam ser calculados para todo o histórico.
-   Ajuste de metadados, como um ticker de ativo que foi alterado.

O reprocessamento segue regras estritas para garantir a integridade dos dados:

-   **RAW nunca é alterado:** O reprocessamento nunca modifica a camada de dados brutos. Ela permanece como a evidência imutável.
-   **Reprocessamento parte do RAW:** Qualquer reprocessamento sempre lê os dados da camada RAW, garantindo que a lógica corrigida seja aplicada sobre a fonte original da verdade.
-   **Execução Controlada:** O reprocessamento é executado de forma controlada, geralmente para um intervalo de datas e um conjunto de identificadores específicos, para minimizar o impacto.
-   **Impacto Rastreável:** Graças ao versionamento do Delta Lake (*time travel*), é possível rastrear o impacto de cada reprocessamento e, se necessário, reverter para uma versão anterior dos dados.


---

## 11. Governança Avançada e Controle de Risco

Além dos mecanismos de governança padrão, a plataforma implementa uma série de controles avançados para mitigar riscos específicos associados a dados financeiros. O objetivo é garantir não apenas a qualidade, mas também a resiliência do Data Product contra cenários de falha comuns.

### 11.1 Tipos de Risco Mitigados

A arquitetura foi desenhada para endereçar proativamente os seguintes riscos:

-   **Risco de Dado Ausente:** Mitigado pela combinação da dimensão de calendário (`dm_date`), que garante a existência de um registro para cada dia, com a regra de *carry-forward*, que preenche os valores de preço em dias não úteis.
-   **Risco de Dado Incorreto:** A estrita separação entre as camadas RAW e Refined é o principal controle. Se um dado incorreto for ingerido, a camada RAW o preserva como evidência, e a correção é aplicada na camada Refined, sem destruir o histórico original.
-   **Risco de Interpretação:** Centralizar todas as regras de negócio no Databricks e documentá-las de forma explícita elimina a ambiguidade e o risco de diferentes áreas da empresa interpretarem o mesmo dado de maneiras distintas.
-   **Risco de Regressão:** Débitos técnicos e pontos de atenção são documentados e versionados. Isso evita que futuras manutenções reintroduzam problemas já conhecidos ou quebrem lógicas de negócio estabelecidas.

### 11.2 Controles Implementados

A tabela abaixo resume os principais controles de governança e a forma como foram implementados na plataforma:

| Controle | Implementação |
| :--- | :--- |
| **Qualidade** | Validações `CHECK_NAME` e `CHECK_HIST` no `dm_dicionario` para garantir a consistência semântica dos ativos. |
| **Rastreabilidade** | Campos de metadados como `ingestion_date` e `DL_SNAPSHOT_START_TIME` que permitem a linhagem completa do dado. |
| **Auditabilidade** | A imutabilidade da camada RAW, que serve como uma trilha de auditoria perpétua e confiável. |
| **Consistência** | Uso da operação `MERGE` idempotente do Delta Lake, que previne a duplicação de dados e garante a consistência em caso de reexecuções. |
---

## 12. Catálogo de Indicadores, Glossário e Diagramas

Para facilitar o entendimento e o uso da plataforma, a documentação inclui catálogos detalhados, um glossário de termos e uma série de diagramas que ilustram a arquitetura e os fluxos de dados.

### 12.1 Catálogo Completo de Indicadores

A tabela a seguir apresenta um catálogo detalhado de todos os indicadores calculados e disponíveis no `dm_bloomberg`.

| Grupo | Indicador | Fórmula | Base | Observações |
| :--- | :--- | :--- | :--- | :--- |
| Preço | `PX_LAST_ALTERADO` | `last(PX_LAST)` | Histórico | Propaga o último preço válido. Ignora `%Change`. |
| Média | `AVG_PX_LAST_30D` | `avg(PX_LAST)` | 30 dias | Calculada sobre o preço absoluto. |
| Média | `AVG_PX_LAST_60D` | `avg(PX_LAST)` | 60 dias | Calculada sobre o preço absoluto. |
| Média | `AVG_PX_LAST_90D` | `avg(PX_LAST)` | 90 dias | Calculada sobre o preço absoluto. |
| Média | `AVG_PX_LAST_365D`| `avg(PX_LAST)` | 365 dias | Calculada sobre o preço absoluto. |
| MTD | `CHG_NET_MTD` | `PX - BASE_MTD` | Mês | Base é o primeiro dia útil do mês. |
| MTD | `CHG_PCT_MTD` | `CHG_NET / BASE` | Mês | Fórmula em correção. |
| YTD | `CHG_NET_YTD` | `PX - BASE_YTD` | Ano | Base é o primeiro dia útil do ano. |
| YTD | `CHG_PCT_YTD` | `CHG_NET / BASE` | Ano | Proteção contra divisão por zero. |
| Lag | `PX_LAST_Dn` | `lag(PX, n)` | n dias | n ∈ {1, 7, 30, 60, 90, 365}. |
| Var | `CHG_NET_Dn` | `PX - PX_Dn` | n dias | Diferença líquida. |
| Var | `CHG_PCT_Dn` | `CHG_NET / PX_Dn`| n dias | Proteção contra divisão por zero. |

### 12.2 Glossário Técnico-Financeiro

-   **Carry-Forward:** Técnica de propagação do último valor válido no tempo para preencher lacunas em séries temporais.
-   **%Change:** Variação percentual de um preço, fornecida diretamente pela fonte. É tratada como um evento discreto e nunca como um preço absoluto.
-   **RAW:** Camada de armazenamento de dados brutos, imutáveis, que servem como evidência histórica.
-   **Trusted:** Camada de armazenamento onde os dados são padronizados, limpos e deduplicados.
-   **Refined:** Camada final de armazenamento, onde as regras de negócio são aplicadas e os Data Products são criados.
-   **Data Product:** Um ativo de dados que possui um dono, um SLA definido, um contrato semântico claro e é projetado para ser consumido por outros sistemas ou usuários.

### 12.3 Diagramas C4 e de Sequência

A documentação é enriquecida com diagramas que seguem o modelo C4 (Contexto, Contêineres, Componentes) e diagramas de sequência para ilustrar os fluxos de dados. Estes diagramas são mantidos em formato Mermaid no repositório de código, o que permite que sejam versionados e atualizados junto com a plataforma.

---

## 13. Testes, Validações e Observabilidade

### 13.1 Validações Recomendadas

- Teste de calendário contínuo
- Teste de %Change não propagado
- Teste de divisão por zero
- Teste de deduplicação por chave

### 13.2 Observabilidade

- Logs ADF (execução)
- Logs Databricks (jobs)
- View `controle_atualizacoes`
- Métricas de SLA

---

## 14. Segurança e Compliance

- Autenticação via Managed Identity
- Segredos centralizados no Key Vault
- Acesso segregado por camada
- Dados brutos preservados

---

## 15. Roadmap Técnico

- Correção `CHG_PCT_MTD`
- Guardas universais em `CHG_PCT_D*`
- Testes automatizados
- Métricas de SLA em dashboard
- Parametrização total de pipelines

---

## 16. Conclusão Final

Este documento representa a **documentação técnica completa e oficial** da Plataforma Bloomberg. Ele descreve, com a máxima profundidade, a arquitetura, os fluxos, os cálculos, as regras de negócio, a operação e a governança da solução. Deve ser tratado como a **fonte única da verdade** e a base para toda a evolução futura deste Data Product.
