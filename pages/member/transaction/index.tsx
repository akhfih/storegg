import SideBar from '../../../components/organisms/SideBar';
import TransactionContent from '../../../components/organisms/TransactionContent';

export default function index() {
  return (
    <>
      {/* <!-- Transactions --> */}
      <section className="transactions overflow-auto">
        <SideBar activeMenu="transaction" />
        <TransactionContent />
      </section>
    </>
  );
}

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    }
  }
}

export async function getServerSideProps({ req }: GetServerSideProps) {
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
