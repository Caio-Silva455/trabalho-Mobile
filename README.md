# Vertex Gestão

Aplicação móvel desenvolvida em **React Native (Expo Snack)** para a disciplina de **Desenvolvimento Mobile**, focada na gestão operacional de **Clientes**, **Serviços**, **Agendamentos**, **Relatórios**, **Dashboard**, **Configurações**, **Perfil**, **Internacionalização (PT / EN / ES)** e **Autenticação**, com persistência em nuvem via **Supabase (PostgreSQL)**.

---

## Sumário

1. [Visão Geral](#visão-geral)
2. [Identidade Visual](#identidade-visual)
3. [Funcionalidades e Catálogo de Telas (16 Telas)](#funcionalidades-e-catálogo-de-telas-16-telas)
4. [Stack Tecnológica](#stack-tecnológica)
5. [Arquitetura e Estrutura de Pastas](#arquitetura-e-estrutura-de-pastas)
6. [Configuração do Supabase](#configuração-do-supabase)
7. [Como Executar no Expo Snack](#como-executar-no-expo-snack)
8. [Boas Práticas e Compatibilidade Multiplataforma](#boas-práticas-e-compatibilidade-multiplataforma)

---

## Visão Geral

O **Vertex Gestão** foi projetado para centralizar a rotina operacional de pequenos negócios e prestadores de serviços num único ambiente móvel. A aplicação combina navegação híbrida (**Drawer + Stack**), gestão de estado global reativa (**Context API**), validação de formulários e integração direta com base de dados relacional em nuvem.

---

## Identidade Visual

* **Cor Primária (Azul Marinho):** `#1E3A8A` — cabeçalhos, destaques institucionais, bordas de cartões e ações de edição.
* **Cor de Destaque (Teal / Verde-Água):** `#0D9488` — botões de ação principal (`+ Novo Cliente`, `Salvar`), selos de categoria e avanço de status.
* **Fundo Geral e Superfícies:** `#F8FAFC` (fundo principal) e `#FFFFFF` (cartões e formulários).
* **Tipografia e Alertas:** `#0F172A` (texto principal), `#475569` / `#64748B` (textos secundários e contadores) e `#DC2626` (exclusão e alertas).

---

## Funcionalidades e Catálogo de Telas (16 Telas)

1. **`LoginScreen.js` (Login):** Autenticação do utilizador com validação de campos e atalho para registo.
2. **`RegisterScreen.js` (Cadastro):** Criação de nova conta com validação de dados e feedback de estado.
3. **`DashboardScreen.js` (Dashboard):** Visão geral com indicadores resumidos de clientes, serviços, agendamentos e distribuição por categoria.
4. **`ClientsScreen.js` (Lista de Clientes):** Listagem com contador de registos exibidos vs. total, filtro por categoria (`Todos`, `VIP`, `Recorrente`, `Novo`) e botão para cadastro.
5. **`ClientFormScreen.js` (Formulário de Cliente):** Criação e edição de clientes (`name`, `phone`, `category`) sincronizada com a tabela `clients`.
6. **`ClientDetailScreen.js` (Detalhes do Cliente):** Exibição completa dos dados do cliente com ações para **Editar** ou **Excluir**.
7. **`ServicesScreen.js` (Lista de Serviços):** Catálogo dos serviços cadastrados com acesso rápido à criação e detalhes.
8. **`ServiceFormScreen.js` (Formulário de Serviço):** Criação e edição de serviços (`title`, `price`, `duration`) persistida na tabela `services`.
9. **`ServiceDetailScreen.js` (Detalhes do Serviço):** Consulta detalhada do serviço selecionado, com opções de editar ou excluir.
10. **`AppointmentsScreen.js` (Lista de Agendamentos):** Visualização dos compromissos agendados, cliente, serviço, data/hora e estado (`Pendente`, `Confirmado`, `Concluído`).
11. **`AppointmentFormScreen.js` (Formulário de Agendamento):** Registo de novos agendamentos vinculados a cliente, serviço e data/horário na tabela `appointments`.
12. **`AppointmentDetailScreen.js` (Detalhes do Agendamento):** Consulta completa do compromisso, botão para **Avançar Status** do atendimento e opção de exclusão.
13. **`ReportsScreen.js` (Relatórios e Indicadores):** Consolidação de métricas em tempo real (valor total do portfólio, agendamentos por status e segmentação de clientes).
14. **`LanguageScreen.js` (Seleção de Idioma):** Troca dinâmica de idioma entre **Português (Brasil)**, **English (US)** e **Español** via `LanguageContext`.
15. **`ProfileScreen.js` (Perfil do Usuário):** Dados do perfil/negócio, navegação auxiliar e encerramento de sessão (`Logout`).
16. **`SettingsScreen.js` (Configurações):** Preferências gerais do sistema (lembretes, sincronização em nuvem, modo compacto), atalho de idioma e informações da versão.

---

## Stack Tecnológica

* **Ambiente:** Expo Snack / React Native (Expo SDK 54)
* **Navegação:** React Navigation v7 (`@react-navigation/native`, `@react-navigation/drawer`, `@react-navigation/native-stack`) e `react-native-gesture-handler`
* **Estado Global:** Context API (`LanguageContext`, `AuthContext`, `DataContext`)
* **Formulários e Seletores:** Formik, Yup e `@react-native-picker/picker`
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
    ├── screens/
    │   ├── AppointmentDetailScreen.js
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
    │   ├── ReportsScreen.js
    │   ├── ServiceDetailScreen.js
    │   ├── ServiceFormScreen.js
    │   ├── ServicesScreen.js
    │   └── SettingsScreen.js
    └── services/
        └── supabase.js
```

---

## Configuração do Supabase

### 1. Tabelas e Políticas RLS (`SQL Editor`)

Execute o script abaixo no **SQL Editor** do projeto Supabase para criar as tabelas e habilitar as políticas de acesso:

```sql
create table if not exists public.clients (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  phone text not null,
  category text not null default 'Novo',
  created_at timestamp with time zone default now()
);

create table if not exists public.services (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  price text not null,
  duration text not null default '7 dias',
  created_at timestamp with time zone default now()
);

create table if not exists public.appointments (
  id uuid default gen_random_uuid() primary key,
  client_name text not null,
  service_title text not null,
  date text not null,
  status text not null default 'Pendente',
  created_at timestamp with time zone default now()
);

alter table public.clients enable row level security;
alter table public.services enable row level security;
alter table public.appointments enable row level security;

drop policy if exists "allow_all_clients" on public.clients;
create policy "allow_all_clients"
on public.clients
for all
using (true)
with check (true);

drop policy if exists "allow_all_services" on public.services;
create policy "allow_all_services"
on public.services
for all
using (true)
with check (true);

drop policy if exists "allow_all_appointments" on public.appointments;
create policy "allow_all_appointments"
on public.appointments
for all
using (true)
with check (true);
```

### 2. Cliente Supabase (`src/services/supabase.js`)

```javascript
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://pgpujejhmjjnszsviggr.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_ithnIkpDj-ndiia-U50seA_1Yb5Fxh1';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false,
  },
});
```

---

## Como Executar no Expo Snack

1. Abra o projeto no **Expo Snack** e confirme que todas as dependências (`@supabase/supabase-js`, `@react-navigation/native`, `@react-navigation/drawer`, `@react-navigation/native-stack`, `react-native-gesture-handler`, `@react-native-picker/picker`, `formik`, `yup`) estão instaladas no `package.json`.
2. Verifique se `src/services/supabase.js` contém uma URL HTTP/HTTPS pura e a chave pública do projeto.
3. Clique em **Save** e teste a aplicação nos separadores **Web**, **Android**, **iOS** ou **My Device** (via Expo Go).

---

## Boas Práticas e Compatibilidade Multiplataforma

* **Confirmação de Exclusão Web e Mobile:** Nos ecrãs de detalhe (`ClientDetailScreen`, `ServiceDetailScreen` e `AppointmentDetailScreen`), utiliza-se `window.confirm` quando `Platform.OS === 'web'` e `Alert.alert` nas plataformas nativas, garantindo que a exclusão funcione em qualquer ambiente.
* **Renderização Segura de Textos:** Todos os valores dinâmicos exibidos em `<Text>` e chaves de `FlatList` são convertidos com `String(...)` e validados antes da renderização para evitar falhas de execução.