FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
COPY . .

ENV DOTNET_URLS=http://+:5123

FROM mcr.microsoft.com/dotnet/sdk:8.0
WORKDIR /app
COPY . .
RUN dotnet restore './backend.csproj'
CMD ["dotnet", "watch", "run"]
