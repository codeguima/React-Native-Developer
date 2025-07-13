import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './SkillScreenStyle';
import profile from '../../../assets/pictures/profile.png';

interface Skill {
  name: string;
  level: number; // 1 a 5
}

const skills: Skill[] = [
  { name: 'React Native', level: 4 },
  { name: 'TypeScript', level: 4 },
  { name: 'Expo', level: 4 },
  { name: 'UI Design', level: 3 },
  { name: 'Git/GitHub', level: 4 },
  { name: 'Node.js', level: 3 },
];

export function SkillScreen() {
  return (
    <View style={styles.container}>
      <Image source={profile} style={styles.image} />
      <Text style={styles.name}>Seu Nome</Text>
      <Text style={styles.subtitle}>🌱 Minha Árvore de Habilidades:</Text>

      {skills.map((skill, index) => (
        <View key={index} style={styles.skillContainer}>
          <Text style={styles.skillName}>{skill.name}</Text>
          <Text style={styles.skillLevel}>
            {'⭐'.repeat(skill.level)}{'☆'.repeat(5 - skill.level)}
          </Text>
        </View>
      ))}
    </View>
  );
}
