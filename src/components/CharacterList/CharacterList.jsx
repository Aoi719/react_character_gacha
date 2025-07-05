import styles from './CharacterList.module.css'

export default function CharacterList({ ownedCharacters }) {
  return (
    <ul className={styles.characterList}>
      {ownedCharacters.map((chara, index) => (
        <li className={`${styles.characterItem} ${styles[`rarity-${chara.rarity}`]}`} key={`chara-${index}`}>
          <div className={styles.characterImage}>
            <img src={chara.image} alt={chara.name} />
          </div>
          <div className={styles.characterInfo}>
            <p className={styles.characterName}><strong>{chara.name}</strong></p>
            <p className={styles.characterRarity}>レアリティ：{chara.rarity}</p>
            <p className={styles.characterType}>属性：{chara.type}</p>
            <p className={styles.characterDesc}>{chara.description}</p>
          </div>
        </li>
      )
      )}
    </ul>
  )
}
