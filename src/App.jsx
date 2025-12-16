import { Aside } from './components/Aside'
import Card from './components/Card';
import { Container } from './components/Container/index';
import { DailyBudget } from './components/DailyBudget';
import { Main } from './components/Main';
import { SavingStatus } from './components/SavingsStatus';
import { SearchInput } from './components/SearchInput';
import { Transactions } from './components/Transactions';
import { Typography } from './components/Typography';

function App() {

  return (
    <div className="bg-neutral-background min-h-screen">
      <Container>
        <Aside />
        <Main>
          <SearchInput name="q"></SearchInput>
          <div>
            <Typography variant="h1">
              Olá, Rodrigo
            </Typography>
            <Typography>
              Veja como estão suas finanças hoje.
            </Typography>
          </div>
          <section className='grid grid-cols-2 items-stretch gap-5'>
            <Card>
              <Card.Header>
                Orçamento diário disponível
              </Card.Header>
              <Card.Body>
                <DailyBudget value={35}></DailyBudget>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                Progresso da meta financeira
              </Card.Header>
              <Card.Body>
                <SavingStatus percent={20} />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                Movimentação financeira
              </Card.Header>
              <Card.Body>
                <Transactions />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                Minhas contas
              </Card.Header>
              <Card.Body>
                R$ 200,00
              </Card.Body>
            </Card>
          </section>
        </Main>
      </Container>
    </div>
  )
}

export default App
