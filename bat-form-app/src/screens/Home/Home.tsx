import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { styles } from "./Style";
import { BatTextInput } from "../../components/BatTextInput/BatTextInput";
import { BatButton } from "../../components/BatButton/BatButton";
import { BatLogo } from "../../components/BatLogo/BatLogo";

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [history, setHistory] = useState<{ name: string; phone: string; address: string }[]>([]);

  return (
    <View style={styles.appContainer}>

      {/* Botão Voltar */}
      {showForm && (
        <View
          style={styles.buttonReturnPosition}
        >
        <Pressable
            style={styles.buttonColorReturn}
            onPress={() => {
            setShowForm(false);
            setName('');
            setPhone('');
            setAddress('');
          }}
        >
      <Text style={{ color: '#fff', fontSize: 16 }}>⬅️ Voltar</Text>
    </Pressable>
  </View>
)}


      {/* Tela principal */}
      {!showForm && (
        <>
          <View style={styles.logoContainer}>
            <BatLogo />
          </View>
          <View style={styles.inputContainer}>
            <BatButton
              title="Abrir Formulário"
              onPress={() => setShowForm(true)}
            />
          </View>
        </>
      )}

      {/* Formulário */}
      {showForm && (
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Preencha o formulário</Text>

          <BatTextInput
            placeholder="Nome"
            value={name}
            onChangeText={setName}
          />
          <BatTextInput
            placeholder="Telefone"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
          <BatTextInput
            placeholder="Endereço"
            value={address}
            onChangeText={setAddress}
          />
          <BatButton
            title="Enviar"
            onPress={() => {
              if (!name || !phone || !address) {
                alert('Preencha todos os campos!');
                return;
              }
              setHistory(prev => [...prev, { name, phone, address }]);
              setName('');
              setPhone('');
              setAddress('');
            }}
          />

          {/* Histórico */}
          {history.length > 0 && (
            <View style={{ marginTop: 20, width: '100%', paddingHorizontal: 20 }}>
              <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
                Histórico de Envios:
              </Text>
              {history.map((item, index) => (
                <View key={index} style={styles.formHistory}>
                  <Text style={{ color: '#fff' }}>👤 {item.name}</Text>
                  <Text style={{ color: '#fff' }}>📞 {item.phone}</Text>
                  <Text style={{ color: '#fff' }}>🏠 {item.address}</Text>
                </View>
              ))}
              <BatButton
                title="Limpar Histórico"
                onPress={() => setHistory([])}
              />
            </View>
          )}
        </View>
      )}

      <StatusBar style="light" />
    </View>
  );
}
