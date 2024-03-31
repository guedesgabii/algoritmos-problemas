def search(n, k, arr)
  (0...n).each do |i|
    if arr[i] == k
      return i + 1
    end
  end
  return -1
end
