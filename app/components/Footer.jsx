export default function Footer() {
  return (
    <footer
      className="
        mt-24
        py-4
        text-center text-xs
        text-slate-500 dark:text-gray-400
        border-t border-slate-200 dark:border-white/10
      "
    >
      <p>
        © {new Date().getFullYear()}{' '}
        <span className="text-slate-700 dark:text-gray-300 font-medium">
          Azhar As Rahmatulloh
        </span>
      </p>
    </footer>
  )
}
