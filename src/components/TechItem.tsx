type Props = {
    techs: string
}

export function TechItem({techs}: Props){
    return (
        <div className="px-4 py-2 mx-2 border border-zinc-500 rounded-sm">
            <p className="text-zinc-300">{techs}</p>
        </div>
    )
}