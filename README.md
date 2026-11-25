# Vertex Gestão

Aplicação móvel desenvolvida em **React Native (Expo Snack)** para a disciplina de **Desenvolvimento Mobile**, focada na gestão operacional de **Clientes**, **Serviços**, **Agendamentos**, **Dashboard**, **Perfil**, **Internacionalização (PT / EN / ES)** e **Autenticação**, com persistência em nuvem via **Supabase (PostgreSQL)**.

---

## Sumário

1. [Visão Geral](#visão-geral)
2. [Funcionalidades Principais](#funcionalidades-principais)
3. [Stack Tecnológica](#stack-tecnológica)
4. [Arquitetura e Estrutura de Pastas](#arquitetura-e-estrutura-de-pastas)
5. [Configuração do Supabase](#configuração-do-supabase)
6. [Como Executar no Expo Snack](#como-executar-no-expo-snack)
7. [Notas de Compatibilidade (Web, Android e iOS)](#notas-de-compatibilidade-web-android-e-ios)

---

## Visão Geral

O **Vertex Gestão** foi desenhado para centralizar o atendimento e a organização de pequenos negócios e prestadores de serviços num único ambiente móvel. A aplicação combina navegação estruturada (**Drawer + Stack**), estado global reativo (**Context API**), validação de dados e integração direta com base de dados relacional.

### Identidade Visual
* **Cor Primária (Azul Marinho):** `#1E3A8A` — cabeçalhos, elementos institucionais e ações de edição.
* **Cor de Destaque (Teal / Verde-Água):** `#0D9488` — botões principais (`+ Novo Cliente`, `Salvar`) e selos de categoria.
* **Fundo e Superfícies:** `#F8FAFC` (fundo geral) e `#FFFFFF` (cartões e formulários).
* **Tipografia e Alertas:** `#0F172A` (texto principal), `#475569` / `#64748B` (textos secundários) e `#DC2626` (exclusão e alertas).

---

## Funcionalidades Principais

* **Autenticação (`LoginScreen` e `RegisterScreen`):** Fluxo de entrada e registo de utilizador com validação de campos.
* **Dashboard (`DashboardScreen`):** Resumo visual dos indicadores operacionais da aplicação.
* **Gestão de Clientes (`ClientsScreen`, `ClientFormScreen`, `ClientDetailScreen` e `ClientListFilter`):**
  * Listagem com contador de registos exibidos vs. total.
  * Filtro por categoria (`Todos`, `VIP`, `Recorrente`, `Novo`) com `@react-native-picker/picker`.
  * Criação, edição, visualização de detalhes e exclusão persistidas na tabela `clients`.
* **Gestão de Serviços (`ServicesScreen` e `ServiceFormScreen`):** Catálogo e registo de serviços com preço e duração na tabela `services`.
* **Gestão de Agendamentos (`AppointmentsScreen` e `AppointmentFormScreen`):** Registo e acompanhamento de agendamentos e estados (`Pendente`, `Confirmado`, `Concluído`) na tabela `appointments`.
* **Internacionalização (`LanguageScreen` e `LanguageContext`):** Troca dinâmica de idioma entre **Português (Brasil)**, **English (US)** e **Español**.
* **Perfil e Navegação (`ProfileScreen` e `AppNavigator`):** Menu lateral customizado (`Drawer`) integrado à navegação por pilhas (`Stack`) e gestão de sessão (`AuthContext`).

---

## Stack Tecnológica

* **Ambiente:** Expo Snack / React Native
* **Navegação:** React Navigation v7 (`@react-navigation/native`, `@react-navigation/drawer`, `@react-navigation/native-stack`) e `react-native-gesture-handler`
* **Estado Global:** Context API (`LanguageContext`, `AuthContext`, `DataContext`)
* **Formulários e Validação:** Formik, Yup e `@react-native-picker/picker`
* **Backend / Base de Dados:** Supabase (`@supabase/supabase-js` + PostgreSQL)

---

## Arquitetura e Estrutura de Pastas

```text
├── App.js
├── package.json
├── README.md
└── src/
    ├── components/
    │   ├── ClientListFilter/
    │   │   ├── index.js
    │   │   └── styles.js
    │   ├── CustomButton/
    │   │   ├── index.js
    │   │   └── styles.js
    │   ├── CustomInput/
    │   │   ├── index.js
    │   │   └── styles.js
    │   └── StatCard/
    │       ├── index.js
    │       └── styles.js
    ├── contexts/
    │   ├── AuthContext.js
    │   ├── DataContext.js
    │   └── LanguageContext.js
    ├── navigation/
    │   └── AppNavigator.js
    |    |__customDraewr.js
    ├── screens/
    │   ├── AppointmentFormScreen.js
    │   ├── AppointmentsScreen.js
    │   ├── ClientDetailScreen.js
    │   ├── ClientFormScreen.js
    │   ├── ClientsScreen.js
    │   ├── DashboardScreen.js
    │   ├── LanguageScreen.js
    │   ├── LoginScreen.js
    │   ├── ProfileScreen.js
    │   ├── RegisterScreen.js
    │   ├── ServiceFormScreen.js
    │   └── ServicesScreen.js
    └── services/
        └── supabase.js