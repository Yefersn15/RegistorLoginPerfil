import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './Auth.css'

function Profile() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Verificar si el usuario está loggeado
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    const userData = localStorage.getItem('user')

    if (!isLoggedIn || !userData) {
      // Redirigir al login si no está loggeado
      navigate('/login')
      return
    }

    setUser(JSON.parse(userData))
    setLoading(false)
  }, [navigate])

  const handleLogout = () => {
    // Limpiar localStorage
    localStorage.removeItem('user')
    localStorage.removeItem('isLoggedIn')
    
    // Redirigir al login
    navigate('/login')
  }

  if (loading) {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <p>Cargando...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Perfil de Usuario</h2>
        
        {user && (
          <div className="profile-info">
            <div className="profile-avatar">
              {user.name.charAt(0).toUpperCase()}
            </div>
            
            <div className="profile-details">
              <div className="form-group">
                <label>Nombre:</label>
                <p>{user.name}</p>
              </div>
              
              <div className="form-group">
                <label>Correo Electrónico:</label>
                <p>{user.email}</p>
              </div>
              
              <div className="form-group">
                <label>ID de Usuario:</label>
                <p className="user-id">{user.id}</p>
              </div>
            </div>
          </div>
        )}
        
        <button onClick={handleLogout} className="auth-button logout-button">
          Cerrar Sesión
        </button>
        
        <p className="auth-link">
          <Link to="/login">Volver al inicio de sesión</Link>
        </p>
      </div>
    </div>
  )
}

export default Profile
