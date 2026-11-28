type StatusType =
  // pets.status
  | 'available' | 'pending' | 'adopted' | 'archived'
  // adoption_applications.status и volunteer_applications.status
  | 'new' | 'approved' | 'rejected' | 'cancelled'
  // shelters.is_published
  | 'published' | 'hidden'
  // users.role
  | 'volunteer' | 'shelter' | 'admin';


interface StatusBadgeProps {
  status: StatusType;
}

const styles: Record<StatusType, { className: string; label: string }> = {
  available: { 
    className: 'bg-green-100 text-green-800 border-green-200', 
    label: 'Ищет дом' 
  },
  pending: { 
    className: 'bg-yellow-100 text-yellow-800 border-yellow-200', 
    label: 'Идет знакомство' 
  },
  adopted: { 
    className: 'bg-blue-100 text-blue-800 border-blue-200', 
    label: 'Дома' 
  },
  archived: { 
    className: 'bg-gray-100 text-gray-600 border-gray-200', 
    label: 'Скрыт из каталога' 
  },
  new: { 
    className: 'bg-indigo-100 text-indigo-800 border-indigo-200', 
    label: 'Новая' 
  },
  approved: { 
    className: 'bg-emerald-100 text-emerald-800 border-emerald-200', 
    label: 'Одобрена' 
  },
  rejected: { 
    className: 'bg-red-100 text-red-800 border-red-200', 
    label: 'Отклонена' 
  },
  cancelled: { 
    className: 'bg-rose-100 text-rose-800 border-rose-200', 
    label: 'Отменена приютом' 
  },
  published: { 
    className: 'bg-green-100 text-green-800 border-green-200', 
    label: 'Виден на витрине' 
  },
  hidden: { 
    className: 'bg-gray-100 text-gray-600 border-gray-200', 
    label: 'Скрыт' 
  },
  volunteer: { 
    className: 'bg-sky-100 text-sky-800 border-sky-200', 
    label: 'Волонтер' 
  },
  shelter: { 
    className: 'bg-violet-100 text-violet-800 border-violet-200', 
    label: 'Приют' 
  },
  admin: { 
    className: 'bg-slate-800 text-white border-slate-900', 
    label: 'Администратор' 
  },
};

export default function StatusBadge({ status }: StatusBadgeProps) {
    const { className, label } = styles[status];
    return (
        <span className={`px-2.5 py-0.5 rounded-2xl text-xs font-medium border ${className}`}>
            {label}
        </span>
    );
}