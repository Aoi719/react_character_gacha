import styles from './GachaResult.module.css'

export default function GachaResult({ character }) {
  return (
    <div className={styles.result}>
      <div className={styles.resultImage}>
        <img src={character.image} alt={character.name} />
      </div>
      <h3>{character.name}</h3>
      <p>レアリティ：{character.rarity}</p>
      <p>属性：{character.type}</p>
      <p>{character.description}</p>
    </div>
  )
}
