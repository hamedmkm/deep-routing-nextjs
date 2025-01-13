export default function ArchiveLayout ({archive,latest}){
return (
    <div>   
     <h1>news archive</h1>
    
    <section id="archive-filter">
        {archive}
    </section>
    <section id="archive-filter">
        {latest}
    </section>

    </div>
    

)

}