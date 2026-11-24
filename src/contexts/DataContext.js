import React, { createContext, useState, useEffect, useContext } from 'react';

const DataContext = createContext();

// Opcional: substitua pela sua URL real criada no https://mockapi.io/
const MOCK_API_URL = '';

const INITIAL_CLIENTS = [
  { id: '1', name: 'Studio Ellas', category: 'VIP', phone: '(27) 99999-1111' },
  { id: '2', name: 'Clínica Dra. Beatriz', category: 'Recorrente', phone: '(27) 99999-2222' },
  { id: '3', name: 'Barbearia Tarantino', category: 'Novo', phone: '(27) 99999-3333' },
  { id: '4', name: 'Odonto Vila Velha', category: 'VIP', phone: '(27) 99999-4444' },
];

const INITIAL_SERVICES = [
  { id: '1', title: 'Landing Page Next.js', price: '1200', duration: '7 dias' },
  { id: '2', title: 'Automação WhatsApp n8n', price: '600', duration: '3 dias' },
  { id: '3', title: 'Manutenção Mensal', price: '250', duration: '30 dias' },
];

const INITIAL_APPOINTMENTS = [
  {
    id: '1',
    clientName: 'Studio Ellas',
    serviceTitle: 'Automação WhatsApp n8n',
    date: '25/11/2026 14:00',
    status: 'Confirmado',
  },
  {
    id: '2',
    clientName: 'Clínica Dra. Beatriz',
    serviceTitle: 'Landing Page Next.js',
    date: '27/11/2026 10:30',
    status: 'Pendente',
  },
];

export function DataProvider({ children }) {
  const [clients, setClients] = useState(INITIAL_CLIENTS);
  const [services, setServices] = useState(INITIAL_SERVICES);
  const [appointments, setAppointments] = useState(INITIAL_APPOINTMENTS);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;
    async function loadRemoteData() {
      if (!MOCK_API_URL) return;
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`${MOCK_API_URL}/clients`);
        if (!res.ok) throw new Error('Erro HTTP ao buscar API');
        const json = await res.json();
        if (active && Array.isArray(json) && json.length > 0) {
          setClients(json);
        }
      } catch (err) {
        if (active) setError(err.message);
      } finally {
        if (active) setLoading(false);
      }
    }
    loadRemoteData();
    return () => {
      active = false;
    };
  }, []);

  // CRUD Clientes
  const addClient = async ({ name, category, phone }) => {
    try {
      const payload = { id: String(Date.now()), name, category, phone };
      if (MOCK_API_URL) {
        const res = await fetch(`${MOCK_API_URL}/clients`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        const created = await res.json();
        setClients((prev) => [created, ...prev]);
      } else {
        setClients((prev) => [payload, ...prev]);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const updateClient = async (id, { name, category, phone }) => {
    try {
      if (MOCK_API_URL) {
        await fetch(`${MOCK_API_URL}/clients/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, category, phone }),
        });
      }
      setClients((prev) =>
        prev.map((item) => (item.id === id ? { ...item, name, category, phone } : item))
      );
    } catch (err) {
      setError(err.message);
    }
  };

  const deleteClient = async (id) => {
    try {
      if (MOCK_API_URL) {
        await fetch(`${MOCK_API_URL}/clients/${id}`, { method: 'DELETE' });
      }
      setClients((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  // CRUD Serviços
  const addService = ({ title, price, duration }) => {
    const newItem = { id: String(Date.now()), title, price, duration };
    setServices((prev) => [newItem, ...prev]);
  };

  const updateService = (id, { title, price, duration }) => {
    setServices((prev) =>
      prev.map((item) => (item.id === id ? { ...item, title, price, duration } : item))
    );
  };

  const deleteService = (id) => {
    setServices((prev) => prev.filter((item) => item.id !== id));
  };

  // CRUD Agendamentos
  const addAppointment = ({ clientName, serviceTitle, date }) => {
    const newItem = {
      id: String(Date.now()),
      clientName,
      serviceTitle,
      date,
      status: 'Pendente',
    };
    setAppointments((prev) => [newItem, ...prev]);
  };

  const advanceAppointmentStatus = (id) => {
    setAppointments((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;
        const nextStatus =
          item.status === 'Pendente'
            ? 'Confirmado'
            : item.status === 'Confirmado'
            ? 'Concluído'
            : 'Pendente';
        return { ...item, status: nextStatus };
      })
    );
  };

  const deleteAppointment = (id) => {
    setAppointments((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <DataContext.Provider
      value={{
        clients,
        services,
        appointments,
        loading,
        error,
        addClient,
        updateClient,
        deleteClient,
        addService,
        updateService,
        deleteService,
        addAppointment,
        advanceAppointmentStatus,
        deleteAppointment,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
