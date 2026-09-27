export default function OpenInColabButton({ label = "Open in Colab" }) {
  return (
    <button
      onClick={() =>
        window.open(
          "https://colab.research.google.com/notebooks/empty.ipynb",
          "_blank",
          "noopener,noreferrer"
        )
      }
      className="
        inline-flex items-center gap-2
        px-4 py-2 rounded-xl
        bg-slate-500 hover:bg-slate-600
        text-white font-sm font-bold
        shadow-md transition
        focus:outline-none focus:ring-4 focus:ring-orange-300
      "
    >
      <img
        src="/colab.png"
        alt="Google Colab"
        className="w-5 h-5"
      />
      {label}
    </button>
  );
}
