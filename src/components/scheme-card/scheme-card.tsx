import { FC, ChangeEvent, useEffect, useState } from 'react'
import styles from './scheme-card.module.scss'

interface ISchemeCard {
  title: string
  text: string
  type: string
  children?: React.ReactNode
}

const SchemeCard: FC<ISchemeCard> = ({ title, text, children, type }) => {
  const [badgeClassName, setBadgeClassName] = useState(null)
  const [selectedCard, setSelectedCard] = useState(null)

  const isSelected = (value: string): boolean => selectedCard === value

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedCard(event.currentTarget.value)
    console.log('selectedCard: ', selectedCard)
    console.log('currentTarget: ', event.currentTarget.value)
    console.log('target: ', event.target.value)
  }

  useEffect(() => {
    if (type === 'green') {
      setBadgeClassName(styles.badgeBlockGreen)
    }
    if (type === 'orange') {
      setBadgeClassName(styles.badgeBlockOrange)
    }
    if (type === 'red') {
      setBadgeClassName(styles.badgeBlockRed)
    }
  }, [])

  return (
    <label>
      <input
        type='radio'
        value={type}
        className={styles.radio}
        checked={isSelected(type)}
        onChange={handleChange}
      />
      <div className={styles.schemeBlock}>
        <div className={`${styles.badgeBlock} ${badgeClassName}`}>
          {children}
        </div>
        <div className={styles.infoBlock}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </label>
  )
}

export default SchemeCard
