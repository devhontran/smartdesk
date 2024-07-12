import StepItem from './StepItem'
import * as React from 'react'
import { ReactElement } from 'react'
import { useStepStore } from '../../../store/useStepStore'
import s from './styles.module.scss'

export default function Steps(): ReactElement {

  const { nextStep, prevStep } = useStepStore(state => state)
  return <div className={s.wrap}>
    <button className={s.btnPrev} onClick={prevStep}>Prev</button>
    <ul className={s.steps}>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => {
        return <StepItem idx={idx} key={idx} />
      })}
    </ul>
    <button className={s.btnNext} onClick={nextStep}>Next</button>
  </div>
}
