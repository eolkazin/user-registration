import './style.css';
import Trash from '../../assets/lixo.png';

function Home() {
  const users = [
    {
      id: 'aj9dsadas9a',
      name: 'lucas',
      age: '21',
      email: 'lk@email.com',
    },

    {
      id: 'aj9dsa988das9a',
      name: 'jes',
      age: '19',
      email: 'jes@email.com',
    },

    {
      id: 'aj9d33388das9a',
      name: 'mike',
      age: '44',
      email: 'mike@email.com',
    },
  ];
  return (
    <div className='container'>
      <form>
        <h1>user registration</h1>
        <input placeholder='Digite seu nome' name='nome' type='text' />
        <input placeholder='Sua Idade' name='idade' type='number' />
        <input placeholder='Digite seu E-mail' name='email' type='email' />
        <button type='button'>Cadastro</button>
      </form>
      {users.map((user) => (
        <div key={user.id} className='card'>
          <div>
            <p>
              Nome: <span>{user.name}</span>
            </p>
            <p>
              Idade:<span>{user.age}</span>
            </p>
            <p>
              Email:<span>{user.email}</span>
            </p>
          </div>
          <button>
            <img src={Trash} alt='icone de lixo' />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
