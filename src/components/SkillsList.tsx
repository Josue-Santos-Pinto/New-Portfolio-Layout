import { SkillType } from "../types/Skills"

type Props = {
    data: SkillType
}

export function SkillList({data}: Props){
    return (
        <div className="w-12 h-12 overflow-hidden flex items-center justify-center mx-3">
            <img src={data.img} className="w-full h-full object-cover"/>
        </div>
    )
}