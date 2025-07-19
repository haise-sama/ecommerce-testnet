import './index.css';
import { useState, useEffect } from 'react';
import { supabase }  from './client';
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import Dashboard from './frontend/Dashboard';
import { Link, Route, Routes } from 'react-router-dom';

export default function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    // Mengambil sesi yang sudah ada
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    // Mendengarkan perubahan status otentikasi (login/logout)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    // Berhenti mendengarkan ketika komponen di-unmount
    return () => subscription.unsubscribe()
  }, [])

  if (!session) {
    // Jika tidak ada sesi (belum login)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            // KUNCI UTAMA: Hapus semua social provider dengan memberikan array kosong
            providers={[]}
            // Opsional: Anda bisa mengatur tampilan awal ke mode "Sign In" atau "Sign Up"
            view="sign_in" 
          />
        </div>
      </div>
    )
  }
  else {
    // Jika sudah login
    return (
      <div className="justify-center rodeo">
        <div className="form-fill">
        <h1 className="text-2xl font-bold">Anda berhasil login!</h1>
        <p>Email: {session.user.email}</p>
        <button 
          onClick={() => supabase.auth.signOut()}
          className="px-4 py-2 mt-4 font-bold text-white bg-red-500 rounded hover:bg-red-700"
        >
          Logout
        </button>
        </div>
        

        <div className="intro">
          
          SECOCND PAGED</div>

      </div>
    )
  }
}