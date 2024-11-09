export function generate(length : number): number[] {
    const memo = new Set<number>();
    const res : number[] = [];
    let position = 0;
    for(let i = 0; i < length; i++)
    {
        if(position - i < 0  ||  memo.has(position - i))
        {
            memo.add(position + i);
            res.push(position + i);
            position = position + i;
        }
        else
        {
            memo.add(position - i);
            res.push(position - i);
            position = position - i;
        }
    }
    return res;
}