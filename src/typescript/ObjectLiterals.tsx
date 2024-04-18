
interface Person {
  fullName: string
  age: number
  address: {
    country: string
    houseNo: number
  }
}


export const ObjectLiterals = () => {
  
  const person: Person = {
    fullName: 'Fernando Herrera',
    age: 37,
    address: {
      country: 'Canada',
      houseNo: 615
    }
  }
  
  
  return (
    <>
      <h3>Objeto literal</h3>




    </>
  )
}
