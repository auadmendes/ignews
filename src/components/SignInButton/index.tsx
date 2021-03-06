import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, signOut, useSession } from 'next-auth/react'

import styles from './styles.module.scss';

export function SignInButton() {
  const { data: session } = useSession()

  console.log('Showing my session ' + session)


  return session ? (

    <button
      type="button"
      className={styles.signInButton}
    >
      <FaGithub color="#04d361" />
      Luciano Horta
      <FiX color="#737380" className={styles.closeicon} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signIn('github')}
    >
      <FaGithub color="#eba417" />
      Sign in with GitHub
    </button>
  )
}