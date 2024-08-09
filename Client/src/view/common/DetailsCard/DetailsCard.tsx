export function DetailsCard(props:any) {
    return (

        <div
            className="border-[1px] border-gray-200] flex lg:col-span-1 md:col-span-2 col-span-3 flex-col
                 items-center p-8 gap-5 rounded-xl shadow-lg">
              <span className="material-symbols-outlined text-primary text-[30px] font-light">
                        {props.title}
               </span>

            <div className="flex flex-col">
                <h1 className="text-6xl">{props.data}</h1>

            </div>
        </div>

    );
}