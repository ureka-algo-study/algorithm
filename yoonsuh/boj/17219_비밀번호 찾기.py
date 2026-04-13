import sys
input = sys.stdin.readline

N, M = map(int, input().split())
add = {} # 딕샤너리를 사용.

for _ in range(N):
    site, ps = input().split()
    add[site] = ps # 딕셔너리 형태로 저장. 

search = [input().rstrip() for _ in range(M)]

for id in search:
    print(add[id])
##### 시간초과가 났던 코드 #####
# N, M = map(int, input().split())
# address = [list(input().split()) for _ in range(N)]
# search = [input().rstrip() for _ in range(M)]

# for id in search:
#     for addr in address:
#         if addr[0] == id:
#             print(addr[1])