
interface UserProps {
    id: number;
    name: string;
    age?: number; // tanda ? menandakan dia opsional
}

function UserComponent({id, name, age}: UserProps) {
  return (
    <div>
      <h2>{name} (ID: {id})</h2>
      {age && <p>Umur saya: {age}</p>}
    </div>
  )
}

export default UserComponent
