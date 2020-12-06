import React from 'react'
import Person from './Person'

const people = [
  {
    img: 22,
    name: 'Jonh Doe',
    job: 'Carpenter',
  },
  {
    img: 34,
    name: 'Jonh Doe',
    job: 'Carpenter',
  },
  {
    img: 56,
    name: 'Jonh Doe',
    job: 'Carpenter',
  },
]
const PersonList = () => {
  return (
    <section>
      {people.map((person, index) => {
        return <Person {...person} key={index} />
      })}
    </section>
  )
}

export default PersonList
