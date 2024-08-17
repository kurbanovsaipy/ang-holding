import './../css/load_skelet.scss';
import LoadSkeletCard from './LoadSkeletCard';

export default function LoadSkeleton({refer}) {
    return (
        <div className="load_skelet" id='skelet'>
            <LoadSkeletCard />
            <LoadSkeletCard />
            <LoadSkeletCard />
        </div>
    )
}