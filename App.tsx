import React, { useState, useEffect } from 'react';
import styles from './styles';

import {

  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
  StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


type Ticket = {
  id: string;
  title: string;
  description: string;
  status: 'Open' | 'Pre-Closed' | 'Closed';
};

type TicketCardProps = {
  ticket: Ticket;
  role: 'Manager' | 'Technician';
  onUpdate: (id: string, newStatus: 'Pre-Closed' | 'Closed') => void;
};

// --- Reusable Ticket Component ---
const TicketCard: React.FC<TicketCardProps> = ({ ticket, role, onUpdate }) => {
  let actionText: string | null = null;
  let newStatus: 'Pre-Closed' | 'Closed' | '' = '';

  if (role === 'Technician' && ticket.status === 'Open') {
    actionText = 'Mark as Pre-Closed';
    newStatus = 'Pre-Closed';
  } else if (role === 'Manager' && ticket.status === 'Pre-Closed') {
    actionText = 'Finalize and Close';
    newStatus = 'Closed';
  }

  return (
    <View style={styles.ticketCard}>
      <View style={styles.ticketHeader}>
        <Text style={styles.ticketTitle}>{ticket.title}</Text>
        <Text style={styles.ticketStatus}>{ticket.status}</Text>
      </View>
      <Text style={styles.ticketDescription}>{ticket.description}</Text>
      {actionText && (
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => onUpdate(ticket.id, newStatus as 'Pre-Closed' | 'Closed')}
        >
          <Text style={styles.actionButtonText}>{actionText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};


const App: React.FC = () => {
  const [role, setRole] = useState<'Manager' | 'Technician'>('Manager');
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  useEffect(() => {
    const loadTickets = async () => {
      const savedTicketsJSON = await AsyncStorage.getItem('tickets');
      if (savedTicketsJSON) {
        setTickets(JSON.parse(savedTicketsJSON));
      }
    };
    loadTickets();
  }, []);

  useEffect(() => {
    if (tickets.length > 0) {
      AsyncStorage.setItem('tickets', JSON.stringify(tickets));
    }
  }, [tickets]);

  const addTicket = () => {
    if (!title || !description) {
      Alert.alert('Please fill in both fields!');
      return;
    }
    const newTicket: Ticket = {
      id: Date.now().toString(),
      title,
      description,
      status: 'Open',
    };
    setTickets([newTicket, ...tickets]);
    setTitle('');
    setDescription('');
  };

  const updateStatus = (id: string, newStatus: 'Pre-Closed' | 'Closed') => {
    setTickets(
      tickets.map((ticket) =>
        ticket.id === id ? { ...ticket, status: newStatus } : ticket
      )
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>APEXWARE TECHNOLOGIES</Text>
        <Text style={styles.sectionTitle}>Apex Service Flow</Text>
        
        <View style={styles.roleSwitcher}>
          <TouchableOpacity
            style={[styles.roleButton, role === 'Manager' && styles.activeRole]}
            onPress={() => setRole('Manager')}
          >
            <Text style={styles.roleText}>MANAGER</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.roleButton, role === 'Technician' && styles.activeRole]}
            onPress={() => setRole('Technician')}
          >
            <Text style={styles.roleText}>TECHNICIAN</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {role === 'Manager' && (
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Ticket Title"
              value={title}
              onChangeText={setTitle}
            />
            <TextInput
              style={[styles.input, { height: 80 }]}
              placeholder="Description"
              value={description}
              onChangeText={setDescription}
              multiline
            />
            <TouchableOpacity style={styles.addButton} onPress={addTicket}>
              <Text style={styles.addButtonText}>Add Ticket</Text>
            </TouchableOpacity>
          </View>
        )}

        <Text style={styles.sectionTitle}>Tickets</Text>
        {tickets.length === 0 ? (
          <Text style={{ textAlign: 'center', marginTop: 20 }}>
            No tickets yet
          </Text>
        ) : (
          tickets.map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              role={role}
              onUpdate={updateStatus}
            />
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
export default App;

