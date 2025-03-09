import Link from "next/link";

interface LinkVolverProps {
    href?: string;
    text?: string;
}

export default function LinkVolver({ href = "/", text = "Volver" }: LinkVolverProps) {
    return (
        <div className="text-right text-sm">
            <Link href={href} className="text-primary hover:underline">
                {text}
            </Link>
        </div>
    );
}
