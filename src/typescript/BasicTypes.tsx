


export const BasicTypes = () => {
  
  const name: string = "Fernando";
  const powers: string[] = ["React", "React-Native", "Angular"];

  const age: number = 29;
  const isActive: boolean = true;   

  return (
    <>
      <h3>Tipos basicos</h3>

      { name } - { age } - { isActive ? "Active" : "Inactive" }
      <br />

      { powers.join(", ") }


    </>
  )
}
