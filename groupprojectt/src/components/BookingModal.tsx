import { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  Calendar, 
  Phone, 
  Mail, 
  User, 
  MapPin, 
  Building2, 
  Sparkles,
  Users,
  Baby
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackage?: string;
  initialPrice?: number;
}

const TOUR_PACKAGES = [
  {
    id: 'pkg_century_standard',
    name: 'Gói Di Sản 4★ Century Riverside (Phòng Deluxe Ven Sông)',
    hotelName: 'Khách sạn 4★ Century Riverside',
    price: 7100000,
    desc: 'Trọn gói vé máy bay khứ hồi + phòng 4★ ven sông Hương + Ăn uống + Tham quan',
    tag: 'Gói Tiêu Chuẩn Trọn Gói',
  },
  {
    id: 'pkg_century_suite',
    name: 'Gói VIP 4★ Century Riverside (Suite Executive Hướng Sông)',
    hotelName: 'Khách sạn 4★ Century Riverside VIP',
    price: 7700000,
    desc: 'Bao gồm phòng Suite Executive hướng sông Hương + Hạng dịch vụ VIP',
    tag: 'Gói Nâng Cấp VIP',
  },
];

export default function BookingModal({
  isOpen,
  onClose,
  initialPackage = 'Gói Di Sản 4★ Century Riverside (Phòng Deluxe Ven Sông)',
  initialPrice = 7100000,
}: BookingModalProps) {
  const [selectedPkgId, setSelectedPkgId] = useState(
    initialPackage.includes('VIP') ? 'pkg_century_suite' : 'pkg_century_standard'
  );
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [departureDate, setDepartureDate] = useState('2026-10-24');
  const [pickupPoint, setPickupPoint] = useState<'phubai' | 'railway' | 'hotel'>('phubai');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const currentPkg = TOUR_PACKAGES.find((p) => p.id === selectedPkgId) || TOUR_PACKAGES[0];

  const totalEstimate = (currentPkg.price * adults) + Math.round(currentPkg.price * 0.7 * children);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) return;

    const ref = `ELITE-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-950/80 backdrop-blur-md overflow-y-auto font-mono">
      <div className="relative w-full max-w-xl bg-stone-900 border border-amber-500/40 rounded-3xl shadow-2xl overflow-hidden my-6 text-stone-100">

        <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-stone-950 font-black flex items-center justify-center text-sm shadow-md shadow-amber-500/20 shrink-0">
              E
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                {submitted ? 'Xác Nhận Giữ Chỗ Thành Công' : 'Tư Vấn & Đặt Tour Huế 3N2Đ'}
              </h3>
              <p className="text-xs text-amber-400 mt-0.5">
                {submitted ? 'Elite Travel Group đã ghi nhận yêu cầu' : 'Elite Travel Group · Khách Sạn 4★ Century Riverside'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-white rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {submitted ? (

          <div className="p-6 sm:p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-amber-500/10 border border-amber-400/40 text-amber-400 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-amber-500/20">
              <CheckCircle2 size={36} />
            </div>

            <div className="space-y-1.5">
              <h4 className="text-xl sm:text-2xl font-bold text-white">
                Cảm ơn Quý khách, {fullName}!
              </h4>
              <p className="text-xs sm:text-sm text-stone-300">
                Chuyên viên tư vấn Elite Travel Group sẽ liên hệ qua điện thoại/Zalo <strong className="text-amber-400">{phone}</strong> trong vòng 15 phút.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-white/10 text-left space-y-2.5 text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-stone-400">Mã hồ sơ tour:</span>
                <span className="font-bold text-amber-400 font-mono text-sm">{bookingRef}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Gói tour đã chọn:</span>
                <span className="font-semibold text-white text-right max-w-[240px] truncate">{currentPkg.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Số lượng khách:</span>
                <span className="font-semibold text-white">
                  {adults} Người lớn{children > 0 ? `, ${children} Trẻ em` : ''}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Ngày khởi hành dự kiến:</span>
                <span className="font-semibold text-amber-300">{departureDate}</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-white/10 text-sm">
                <span className="font-bold text-white">Tổng dự toán trọn gói:</span>
                <span className="font-bold text-amber-400 text-base">
                  {totalEstimate.toLocaleString('vi-VN')} ₫
                </span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3.5 text-xs font-bold uppercase tracking-wider text-stone-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl transition-all shadow-lg shadow-amber-500/20 cursor-pointer"
            >
              Hoàn Tất &amp; Đóng Cửa Sổ
            </button>
          </div>
        ) : (

          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                Lựa chọn gói tour thực tế:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {TOUR_PACKAGES.map((pkg) => {
                  const isSelected = selectedPkgId === pkg.id;
                  return (
                    <button
                      key={pkg.id}
                      type="button"
                      onClick={() => setSelectedPkgId(pkg.id)}
                      className={`p-3 text-left rounded-xl border text-xs transition-all cursor-pointer relative ${
                        isSelected
                          ? 'border-amber-400 bg-amber-500/15 shadow-md shadow-amber-500/10'
                          : 'border-white/10 bg-black/30 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">
                          {pkg.tag}
                        </span>
                        {isSelected && <span className="text-amber-400 text-xs font-black">✓</span>}
                      </div>
                      <p className="font-bold text-white mt-1">{pkg.hotelName}</p>
                      <p className="text-amber-400 font-black text-sm mt-0.5">
                        {pkg.price.toLocaleString('vi-VN')} ₫ / khách
                      </p>
                      <span className="text-[10px] text-stone-400 block mt-1 leading-snug">
                        {pkg.desc}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-300">Họ và tên *</label>
                <div className="relative">
                  <User size={14} className="absolute left-3 top-3 text-amber-400/70" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Nguyễn Văn A"
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white placeholder-stone-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-300">Số điện thoại / Zalo *</label>
                <div className="relative">
                  <Phone size={14} className="absolute left-3 top-3 text-amber-400/70" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0912 345 678"
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white placeholder-stone-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-300">Email nhận vé &amp; hợp đồng</label>
                <div className="relative">
                  <Mail size={14} className="absolute left-3 top-3 text-amber-400/70" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@example.com"
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white placeholder-stone-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-300">Ngày dự kiến khởi hành</label>
                <div className="relative">
                  <Calendar size={14} className="absolute left-3 top-3 text-amber-400/70" />
                  <input
                    type="date"
                    value={departureDate}
                    min="2026-10-17"
                    onChange={(e) => setDepartureDate(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-amber-300 font-bold focus:outline-none focus:border-amber-400 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-300">Người lớn</label>
                <div className="flex items-center gap-1.5 bg-black/40 border border-white/15 rounded-xl p-1">
                  <button
                    type="button"
                    onClick={() => setAdults(Math.max(1, adults - 1))}
                    className="w-7 h-7 rounded-lg bg-stone-800 hover:bg-amber-500 hover:text-stone-950 text-white font-bold text-xs"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center font-bold text-xs text-white">
                    {adults} khách
                  </span>
                  <button
                    type="button"
                    onClick={() => setAdults(Math.min(30, adults + 1))}
                    className="w-7 h-7 rounded-lg bg-stone-800 hover:bg-amber-500 hover:text-stone-950 text-white font-bold text-xs"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-300">Trẻ em (2-11t)</label>
                <div className="flex items-center gap-1.5 bg-black/40 border border-white/15 rounded-xl p-1">
                  <button
                    type="button"
                    onClick={() => setChildren(Math.max(0, children - 1))}
                    className="w-7 h-7 rounded-lg bg-stone-800 hover:bg-amber-500 hover:text-stone-950 text-white font-bold text-xs"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center font-bold text-xs text-emerald-400">
                    {children} bé
                  </span>
                  <button
                    type="button"
                    onClick={() => setChildren(Math.min(15, children + 1))}
                    className="w-7 h-7 rounded-lg bg-stone-800 hover:bg-amber-500 hover:text-stone-950 text-white font-bold text-xs"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-300">Điểm đón tại Huế</label>
                <select
                  value={pickupPoint}
                  onChange={(e) => setPickupPoint(e.target.value as any)}
                  className="w-full px-2.5 py-2 text-xs rounded-xl bg-black/40 border border-white/15 text-white focus:outline-none focus:border-amber-400 cursor-pointer"
                >
                  <option value="phubai" className="bg-stone-900 text-white">Sân bay Quốc tế Phú Bài (HUI)</option>
                  <option value="railway" className="bg-stone-900 text-white">Ga Huế (Phan Chu Trinh)</option>
                  <option value="hotel" className="bg-stone-900 text-white">Khách sạn 4★ Century</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-stone-300">Ghi chú yêu cầu đặc biệt (tùy chọn)</label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Ví dụ: phòng tầng cao view sông Hương, ăn chay, có người lớn tuổi..."
                className="w-full p-2.5 text-xs rounded-xl bg-black/40 border border-white/15 text-white placeholder-stone-500 focus:outline-none focus:border-amber-400 resize-none"
              />
            </div>

            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/15 to-amber-500/10 border border-amber-400/40 flex items-center justify-between text-xs">
              <div className="space-y-0.5">
                <span className="text-stone-300 block">Dự toán tạm tính ({adults} lớn{children > 0 ? `, ${children} trẻ em` : ''}):</span>
                <span className="text-[10px] text-stone-400">Đã gồm vé máy bay + khách sạn 4★ + ăn uống + tham quan</span>
              </div>
              <span className="text-xl sm:text-2xl font-black text-amber-400 tabular-nums">
                {totalEstimate.toLocaleString('vi-VN')} ₫
              </span>
            </div>

            <div className="pt-1">
              <button
                type="submit"
                className="w-full py-3.5 text-xs font-bold uppercase tracking-wider text-stone-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl transition-all shadow-lg shadow-amber-500/25 cursor-pointer active:scale-98 flex items-center justify-center gap-2"
              >
                <Sparkles size={16} />
                <span>Gửi Yêu Cầu Đặt Chỗ &amp; Nhận Hợp Đồng</span>
              </button>
            </div>

            <p className="text-[10px] text-center text-stone-400 flex items-center justify-center gap-1">
              <ShieldCheck size={12} className="text-amber-400" />
              <span>Bảo mật thông tin khách hàng tuyệt đối · Cam kết không phát sinh phụ phí ẩn</span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
