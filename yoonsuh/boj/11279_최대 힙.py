import heapq
import sys
input = sys.stdin.readline

N = int(input())
heap =[]

for _ in range(N):
    item = int(input())
    heapq.heappush(heap, -item)
    if item == 0:
        print(-heapq.heappop(heap))


