import { login, signup } from './actions';

function LoginPage() {
  return (
    <main>
      <section>
        <h3>Email:example3@naver.com</h3>
        <h3>Password:example1!</h3>
      </section>
      <form>
        <label htmlFor='email'>Email:</label>
        <input id='email' name='email' type='email' required />
        <label htmlFor='password'>Password:</label>
        <input
          id='password'
          name='password'
          type='password'
          required
        />
        <button formAction={login}>Log in</button>
        <button formAction={signup}>Sign up</button>
      </form>
    </main>
  );
}

export default LoginPage;
