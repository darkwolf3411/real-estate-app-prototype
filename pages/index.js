import Link from 'next/link'
import MainWrapper from '../components/UI/MainWrapper'

export default function Home() {
  return (
    <MainWrapper keywords={'main page'} title={'Real Estate App'}>
      <section>
        <h2>Real Estate App</h2>
        <p>
          Here are available <Link href="/listings">listings</Link>.
        </p>
      </section>
      <section>
      </section>
    </MainWrapper>
  )
}

