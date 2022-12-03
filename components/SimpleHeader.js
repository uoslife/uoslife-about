const SimpleHeader = ({ title, description }) => (
  <div className="flex flex-col items-center gap-2 py-3">
    <h1 className="text-3xl font-bold">{title}</h1>
    <p className="text-lg text-gray-500 dark:text-gray-400">{description}</p>
  </div>
)

export default SimpleHeader
