export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-center py-6 mt-10">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} S. Razikur Rahman | All rights reserved.</p>
      </div>
    </footer>
  );
}