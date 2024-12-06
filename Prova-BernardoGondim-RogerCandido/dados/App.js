import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function App() {
  const [dado1, setDado1] = useState(1);
  const [dado2, setDado2] = useState(1);
  const [vencedor, setVencedor] = useState("");
  const [vitoriasJogador1, setVitoriasJogador1] = useState(0);
  const [vitoriasJogador2, setVitoriasJogador2] = useState(0);
  const [empates, setEmpates] = useState(0);

  const imagens = [
    require("./assets/dice1.png"),
    require("./assets/dice2.png"),
    require("./assets/dice3.png"),
    require("./assets/dice4.png"),
    require("./assets/dice5.png"),
    require("./assets/dice6.png"),
  ];

  const sortearImagem = () => {
    const indiceAleatorio1 = Math.floor(Math.random() * imagens.length);
    const indiceAleatorio2 = Math.floor(Math.random() * imagens.length);

    setDado1(indiceAleatorio1 + 1);
    setDado2(indiceAleatorio2 + 1);

    if (indiceAleatorio1 > indiceAleatorio2) {
      setVencedor("Jogador 1");
      setVitoriasJogador1((prev) => prev + 1);
    } else if (indiceAleatorio2 > indiceAleatorio1) {
      setVencedor("Jogador 2");
      setVitoriasJogador2((prev) => prev + 1);
    } else {
      setVencedor("Empate");
      setEmpates((prev) => prev + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo de Dados</Text>
      <Text style={styles.vencedor}>VENCEDOR: {vencedor || "Nenhum ainda"}</Text>

      
      <View style={styles.gameArea}>
        <View style={styles.diceContainer}>
          <Text style={styles.playerText}>Jogador 1</Text>
          <Image source={imagens[dado1 - 1]} style={styles.dice} />
        </View>
        <View style={styles.diceContainer}>
          <Text style={styles.playerText}>Jogador 2</Text>
          <Image source={imagens[dado2 - 1]} style={styles.dice} />
        </View>
      </View>

      
      <TouchableOpacity onPress={sortearImagem} style={styles.button}>
        <Text style={styles.buttonText}>Jogar os Dados</Text>
      </TouchableOpacity>

      
      <View style={styles.scoreBoard}>
        <Text style={styles.scoreText}>Vitórias Jogador 1: {vitoriasJogador1}</Text>
        <Text style={styles.scoreText}>Vitórias Jogador 2: {vitoriasJogador2}</Text>
        <Text style={styles.scoreText}>Empates: {empates}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#28a745",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  vencedor: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 20,
  },
  gameArea: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  diceContainer: {
    alignItems: "center",
    marginHorizontal: 10, 
  },
  dice: {
    width: 80,
    height: 80,
  },
  playerText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginBottom: 5,
  },
  button: {
    backgroundColor: "#6f42c1",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  scoreBoard: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    padding: 15,
    backgroundColor: "#ffffffaa",
    borderRadius: 10,
    alignItems: "center",
  },
  scoreText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginVertical: 5,
  },
});
