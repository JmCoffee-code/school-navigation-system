
export default function NavigationBar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <nav className="flex justify-between items-center px-8 py-4">

        <div className="flex items-center gap-3">
          <div className="text-2xl">🏫</div>
          <div>
            <h1 className="text-2xl font-bold text-green-700 leading-tight"> School Maps </h1>
            <p className="text-xs text-gray-500">  Green Valley Campus  </p>
          </div>
        </div>  

        <div> Search Bar </div>
        <div> Profile </div>

      </nav>
    </header>
  );
}