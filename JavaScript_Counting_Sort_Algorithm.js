
// counting sort

countingSort(list){
  var bucket = [],idx = 0;

  // assign each element to its bucket
  for(var i = 0;i<list.length;i++){
    bucket[list[i]] = bucket[list[i]] || 0
    bucket[list[i]] ++
  }

  // now combine all the buckets
  for(i = 0; i< bucket.length;i++){
    while(bucket[i] && bucket[i] > 0){
      // skip empty buckets and loop over every elements in a bucket
      list[idx++] = i;
      bucket[i] --;
    }
  }
  return list
}
