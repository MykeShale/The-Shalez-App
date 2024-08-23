import ScrollToTopButton from "../components/ScrollToTopButton"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>{children}</main>
      <ScrollToTopButton />
    </>
  )
}