import styles from './resume-showing-date.module.scss'
import { FC } from 'react'
import InputBlock from '../input-block/input-block'
import Chip from '../../ui/сhip/сhip'

const ResumeShowingDate: FC = () => {
  const type = 'secondary'

  return (
    <InputBlock title='Дата показа резюме' extraClass='smallMargin'>
      <p className={styles.text}>
        Когда готовы приступить к рассмотрению первых кандидатов
      </p>
      <div className={styles.chips}>
        <Chip title='через 3 дня' type={type} />
        <Chip title='через неделю' type={type} />
        <Chip title='через месяц' type={type} />
      </div>
    </InputBlock>
  )
}

export default ResumeShowingDate
