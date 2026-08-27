interface ContainerPageProps {
  children: React.ReactNode
}

const ContainerPage = (props: ContainerPageProps) => {
  const { children } = props

  return (
      <div className="w-full max-w-6xl px-4 pb-20 mx-auto md:mt-40 md:pb-0 md:px-6">
          {children}
      </div>
  );
}

export default ContainerPage;