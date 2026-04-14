export default function frequencyCount(arr){
    return arr.reduce((count, tag)=>  ((count[tag] = (count[tag] || 0) + 1), count), {})
}