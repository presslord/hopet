function SkeletonBlock({ className = "" }: { className?: string }) {
  return <div className={`skeleton-block ${className}`} />;
}

export function PetCardSkeletonGrid({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 xl:gap-8">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="space-y-3">
          <SkeletonBlock className="aspect-square rounded-lg" />
          <SkeletonBlock className="h-4 w-2/3 rounded-full" />
          <SkeletonBlock className="h-5 w-1/2 rounded-full" />
        </div>
      ))}
    </div>
  );
}

export function PetsPageSkeleton() {
  return (
    <div className="space-y-6">
      <div className="flex justify-center gap-3 py-4">
        <SkeletonBlock className="h-10 w-24 rounded-lg" />
        <SkeletonBlock className="h-10 w-24 rounded-lg" />
        <SkeletonBlock className="h-10 w-24 rounded-lg" />
      </div>
      <PetCardSkeletonGrid />
    </div>
  );
}

export function PetProfileSkeleton() {
  return (
    <div className="mx-auto max-w-360">
      <section className="pet-profile-card">
        <div className="pet-profile-grid">
          <SkeletonBlock className="aspect-square rounded-lg" />
          <div className="pet-profile-content">
            <SkeletonBlock className="mb-3 h-9 w-40 rounded-full" />
            <SkeletonBlock className="mb-5 h-5 w-32 rounded-full" />
            <div className="space-y-2">
              <SkeletonBlock className="h-5 w-full rounded-full" />
              <SkeletonBlock className="h-5 w-11/12 rounded-full" />
              <SkeletonBlock className="h-5 w-10/12 rounded-full" />
              <SkeletonBlock className="h-5 w-8/12 rounded-full" />
            </div>
            <div className="pet-profile-shelter-card">
              <div className="pet-profile-shelter-info">
                <SkeletonBlock className="h-16 w-16 rounded-full" />
                <div className="min-w-0 flex-1 space-y-2">
                  <SkeletonBlock className="h-4 w-20 rounded-full" />
                  <SkeletonBlock className="h-6 w-36 rounded-full" />
                  <SkeletonBlock className="h-4 w-full rounded-full" />
                </div>
              </div>
              <div className="pet-profile-actions">
                <SkeletonBlock className="h-11 flex-1 rounded-full" />
                <SkeletonBlock className="h-11 flex-1 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-6 rounded-lg bg-white p-4 shadow-lg md:p-6">
        <SkeletonBlock className="mb-6 h-8 w-64 rounded-full" />
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <SkeletonBlock key={index} className="h-20 rounded-lg" />
          ))}
        </div>
      </section>
    </div>
  );
}

export function SheltersPageSkeleton() {
  return (
    <div className="space-y-8 sm:space-y-10">
      <section className="rounded-xl bg-white p-5 shadow-xl sm:p-8">
        <SkeletonBlock className="mb-4 h-7 w-40 rounded-full" />
        <SkeletonBlock className="mb-4 h-12 w-full max-w-2xl rounded-xl" />
        <SkeletonBlock className="h-5 w-full max-w-xl rounded-full" />
      </section>
      <section className="grid gap-6 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="overflow-hidden rounded-xl bg-white shadow-lg">
            <SkeletonBlock className="h-56 rounded-none" />
            <div className="space-y-4 p-5">
              <SkeletonBlock className="h-5 w-full rounded-full" />
              <SkeletonBlock className="h-5 w-9/12 rounded-full" />
              <SkeletonBlock className="h-10 w-40 rounded-full" />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export function ShelterProfileSkeleton() {
  return (
    <div className="space-y-8 sm:space-y-10">
      <section className="overflow-hidden rounded-xl bg-white shadow-xl">
        <SkeletonBlock className="h-64 rounded-none sm:h-80" />
        <div className="space-y-8 px-5 py-16 sm:px-8 sm:pb-8 sm:pt-24">
          <div className="mx-auto max-w-3xl space-y-4">
            <SkeletonBlock className="mx-auto h-10 w-56 rounded-full" />
            <SkeletonBlock className="h-5 w-full rounded-full" />
            <SkeletonBlock className="mx-auto h-5 w-10/12 rounded-full" />
          </div>
          <div className="grid gap-4 lg:grid-cols-[1.6fr_1fr]">
            <SkeletonBlock className="h-36 rounded-lg" />
            <SkeletonBlock className="h-36 rounded-lg" />
          </div>
        </div>
      </section>
      <PetCardSkeletonGrid count={4} />
    </div>
  );
}

export function ProfilePageSkeleton() {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl bg-white p-6 shadow-lg sm:p-8">
        <div className="flex flex-col items-center gap-5 sm:flex-row">
          <SkeletonBlock className="h-24 w-24 rounded-full sm:h-28 sm:w-28" />
          <div className="w-full space-y-3 text-center sm:text-left">
            <SkeletonBlock className="mx-auto h-4 w-20 rounded-full sm:mx-0" />
            <SkeletonBlock className="mx-auto h-9 w-64 rounded-full sm:mx-0" />
          </div>
        </div>
      </section>
      <div className="grid gap-4 sm:grid-cols-3">
        <SkeletonBlock className="h-24 rounded-xl" />
        <SkeletonBlock className="h-24 rounded-xl" />
        <SkeletonBlock className="h-24 rounded-xl" />
      </div>
      <SkeletonBlock className="h-32 rounded-2xl" />
    </div>
  );
}
