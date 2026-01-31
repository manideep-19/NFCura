export default function ValidationSection() {
    return (
        <section className="py-20 px-6 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="md:w-1/3">
                        <h2 className="text-3xl font-bold mb-4 tracking-tight">Early Validation</h2>
                        <div className="h-1 w-20 bg-[#D4F26A] rounded-full" />
                    </div>

                    <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
                        {[
                            "Working Android prototype live",
                            "Real-time QR prescription flow implemented",
                            "Interviews with 10+ doctors",
                            "Validation from 30+ patients"
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#D4F26A] mt-2.5 flex-shrink-0" />
                                <p className="text-slate-300 text-lg font-medium leading-relaxed">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
