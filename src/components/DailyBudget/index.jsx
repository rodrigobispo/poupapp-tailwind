const formatter = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" })

export function DailyBudget({ value }) {
  return (
    <p className="text-primary-highlight leading-[125%] text-center justify-center text-4xl font-bold m-0">
      {formatter.format(value)}
    </p>
  )
}