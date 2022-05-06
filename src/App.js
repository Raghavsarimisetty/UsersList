import UserProfile from './components/UserProfile/index'

import './App.css'

const UserDetailsList = [
  {
    imageURL: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    imageURL: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    imageURL: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    imageURL: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]
const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      {UserDetailsList.map(eachItem => (
        <UserProfile details={eachItem} />
      ))}
      {/* <UserProfile details={UserDetailsList[0]} />
      <UserProfile details={UserDetailsList[1]} />
      <UserProfile details={UserDetailsList[2]} />
      <UserProfile details={UserDetailsList[3]} /> */}
    </ul>
  </div>
)

export default App
