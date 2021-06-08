import React from 'react'
import { observer } from 'mobx-react'
import { useStore } from '../../store/context'

interface ITestComponent {
  title: string;
}

const TestComponent:React.FC<ITestComponent> = observer(({title}): JSX.Element => {
  const store = useStore();

  const { changeTestField, testField } = store

  return (
    <div>
      <h3>{title}</h3>
      <button 
          onClick={() => changeTestField(testField + 1)}
      >
          test
      </button>  
    </div>
  )
})

export default TestComponent