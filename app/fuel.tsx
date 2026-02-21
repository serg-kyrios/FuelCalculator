// import { View, Text, TextInput, Button } from "react-native";
// import { useState } from "react";
// import { styles } from "../styles/styles";

// export default function FuelCalculator() {
//   const [liters, setLiters] = useState("");
//   const [price, setPrice] = useState("");
//   const [km, setKm] = useState("");
//   const [result, setResult] = useState<Result | null>(null);

//   type Result = {
//     total: number;
//     consumption: number;
//     pricePerKm: number;
//   };

//   const calculate = () => {
//     const l = parseFloat(liters);
//     const p = parseFloat(price);
//     const k = parseFloat(km);

//     if (!l || !p || !k) return;

//     const total = l * p;
//     const consumption = (l / k) * 100;
//     const pricePerKm = total / k;

//     setResult({ total, consumption, pricePerKm });
//   };

//   return (
//     <View style={styles.screen}>
//       <Text style={styles.title}>Fuel Calculator 🚗</Text>

//       <View style={styles.card}>
//         <TextInput
//           placeholder="Літри"
//           keyboardType="numeric"
//           value={liters}
//           onChangeText={setLiters}
//           style={styles.input}
//         />

//         <TextInput
//           placeholder="Ціна за літр"
//           keyboardType="numeric"
//           value={price}
//           onChangeText={setPrice}
//           style={styles.input}
//         />

//         <TextInput
//           placeholder="Кілометри"
//           keyboardType="numeric"
//           value={km}
//           onChangeText={setKm}
//           style={styles.input}
//         />

//         <View style={styles.button}>
//           <Button title="Розрахувати" onPress={calculate} />
//         </View>
//       </View>

//       {result && (
//         <View style={styles.resultCard}>
//           <Text style={styles.resultText}>
//             Сума: {result.total.toFixed(2)} грн
//           </Text>
//           <Text style={styles.resultText}>
//             Витрата: {result.consumption.toFixed(2)} л/100км
//           </Text>
//           <Text style={styles.resultText}>
//             1 км: {result.pricePerKm.toFixed(2)} грн
//           </Text>
//         </View>
//       )}
//     </View>
//   );
// }
